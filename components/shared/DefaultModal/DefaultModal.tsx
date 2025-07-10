'use client';

import { useState, ReactNode } from 'react';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Plus, X } from 'lucide-react';

// Types
interface SelectOption {
	value: string;
	label: string;
}

interface TextField {
	type: 'text';
	name: string;
	label: string;
	placeholder?: string;
	className?: string;
	inputClassName?: string;
	defaultValue?: string;
}

interface SelectField {
	type: 'select';
	name: string;
	label: string;
	placeholder?: string;
	className?: string;
	options: SelectOption[];
	defaultValue?: string;
}

interface ListItem {
	[key: string]: string;
}

interface DynamicListField {
	type: 'dynamic-list';
	name: string;
	addButtonText?: string;
	fields: (TextField | SelectField)[];
	defaultValue?: ListItem[];
}

type Field = TextField | SelectField | DynamicListField;

interface FormData {
	[key: string]: string | ListItem[];
}

interface DefaultModalProps {
	title: string;
	icon: ReactNode;
	trigger: ReactNode;
	fields: Field[];
	onSave: (data: FormData) => void;
	onCancel: () => void;
}

// Component
const DefaultModal: React.FC<DefaultModalProps> = ({
	title,
	icon,
	trigger,
	fields,
	onSave,
	onCancel,
}) => {
	const [formData, setFormData] = useState<FormData>(() => {
		const initialData: FormData = {};

		fields.forEach((field) => {
			if (field.type === 'dynamic-list') {
				initialData[field.name] = field.defaultValue || [{}];
			} else {
				initialData[field.name] = field.defaultValue || '';
			}
		});

		return initialData;
	});

	const updateStringField = (fieldName: string, value: string) => {
		setFormData((prev) => ({ ...prev, [fieldName]: value }));
	};

	const addListItem = (fieldName: string) => {
		const currentList = formData[fieldName] as ListItem[];
		setFormData((prev) => ({
			...prev,
			[fieldName]: [...currentList, {}],
		}));
	};

	const removeListItem = (fieldName: string, index: number) => {
		const currentList = formData[fieldName] as ListItem[];
		setFormData((prev) => ({
			...prev,
			[fieldName]: currentList.filter((_, i) => i !== index),
		}));
	};

	const updateListItem = (
		fieldName: string,
		index: number,
		subField: string,
		value: string
	) => {
		const currentList = formData[fieldName] as ListItem[];
		setFormData((prev) => ({
			...prev,
			[fieldName]: currentList.map((item, i) =>
				i === index ? { ...item, [subField]: value } : item
			),
		}));
	};

	const renderField = (field: Field) => {
		switch (field.type) {
			case 'text':
				return (
					<div key={field.name} className="space-y-2">
						<Label>{field.label}</Label>
						<Input
							value={formData[field.name] as string}
							onChange={(e) => updateStringField(field.name, e.target.value)}
							placeholder={field.placeholder}
							className={field.inputClassName}
						/>
					</div>
				);

			case 'select':
				return (
					<div key={field.name} className="space-y-2">
						<Label>{field.label}</Label>
						<Select
							value={formData[field.name] as string}
							onValueChange={(value) => updateStringField(field.name, value)}
						>
							<SelectTrigger>
								<SelectValue placeholder={field.placeholder} />
							</SelectTrigger>
							<SelectContent>
								{field.options.map((option) => (
									<SelectItem key={option.value} value={option.value}>
										{option.label}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				);

			case 'dynamic-list':
				const listItems = formData[field.name] as ListItem[];

				return (
					<div key={field.name} className="space-y-3">
						{listItems.map((item, index) => (
							<div key={index} className="flex gap-3 items-end">
								{field.fields.map((subField) => (
									<div
										key={subField.name}
										className={`space-y-2 ${subField.className || 'flex-1'}`}
									>
										{index === 0 && <Label>{subField.label}</Label>}

										{subField.type === 'select' ? (
											<Select
												value={item[subField.name] || ''}
												onValueChange={(value) =>
													updateListItem(
														field.name,
														index,
														subField.name,
														value
													)
												}
											>
												<SelectTrigger>
													<SelectValue placeholder={subField.placeholder} />
												</SelectTrigger>
												<SelectContent>
													{subField.options.map((option) => (
														<SelectItem key={option.value} value={option.value}>
															{option.label}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
										) : (
											<Input
												value={item[subField.name] || ''}
												onChange={(e) =>
													updateListItem(
														field.name,
														index,
														subField.name,
														e.target.value
													)
												}
												placeholder={subField.placeholder}
												className={subField.inputClassName}
											/>
										)}
									</div>
								))}

								{listItems.length > 1 && (
									<Button
										variant="ghost"
										size="sm"
										className="mb-2"
										onClick={() => removeListItem(field.name, index)}
									>
										<X className="w-4 h-4" />
									</Button>
								)}
							</div>
						))}

						<Button
							variant="outline"
							size="sm"
							className="w-auto"
							onClick={() => addListItem(field.name)}
						>
							<Plus className="w-4 h-4 mr-1" />
							{field.addButtonText || 'Add Item'}
						</Button>
					</div>
				);

			default:
				return null;
		}
	};

	return (
		<Dialog>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="flex items-center gap-2">
						{icon}
						{title}
					</DialogTitle>
				</DialogHeader>

				<div className="space-y-4 mt-4">
					{fields.map(renderField)}

					<div className="flex justify-end gap-3 mt-6 pt-4 border-t">
						<Button variant="outline" onClick={onCancel}>
							Cancel
						</Button>
						<Button onClick={() => onSave(formData)}>Save</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default DefaultModal;

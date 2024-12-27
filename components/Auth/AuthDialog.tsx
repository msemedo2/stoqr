import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import Icon from '../shared/Icons/Icons';
import { Button } from '../ui/button';
import { toast } from '@/hooks/use-toast';
import { signIn } from 'next-auth/react';

export type AuthType = 'sign-in' | 'sign-up';

type AuthDialogProps = {
	isOpen: boolean;
	onClose: () => void;
};

type AuthProvider = {
	id: 'GITHUB' | 'GOOGLE';
	label: 'github' | 'google';
};

const AuthDialog: React.FC<AuthDialogProps> = ({ isOpen, onClose }) => {
	const handleSignIn = async (provider: 'github' | 'google') => {
		try {
			await signIn(provider, {
				callbackUrl: '/',
				redirect: false,
			});
		} catch (err) {
			console.log(err);
			toast({
				title: 'Sign-in Fail',
				description:
					err instanceof Error
						? err.message
						: 'An error occurred during sign-in',
				variant: 'destructive',
			});
		}
	};

	const providers: AuthProvider[] = [
		{ id: 'GITHUB', label: 'github' },
		{ id: 'GOOGLE', label: 'google' },
	];

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="bg-elevated border-white/[0.08]">
				<DialogHeader className="flex justify-between">
					<DialogTitle className="mb-1">Sign-in</DialogTitle>
					<DialogDescription className="text-secondary flex gap-3 items-center">
						<Icon type="LOGO" />
						Taking control of your wealth
					</DialogDescription>
				</DialogHeader>
				<div className="flex gap-4">
					{providers.map(({ id, label }) => (
						<Button key={id} size="sm" onClick={() => handleSignIn(label)}>
							<Icon type={id} />
							Continue with {label}
						</Button>
					))}
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default AuthDialog;

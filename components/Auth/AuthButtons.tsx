'use client';

import { LogOut } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import AuthDialog from './AuthDialog';
import { signOut, useSession } from 'next-auth/react';

const AuthButtons = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const { data: session } = useSession();

	const handleSignOut = async () => {
		try {
			await signOut({ redirect: true, callbackUrl: '/' });
		} catch (error) {
			console.error('Sign out error:', error);
		}
	};

	return (
		<div className="space-y-2">
			{session ? (
				<Button
					variant="secondary"
					onClick={handleSignOut}
					className="justify-start"
				>
					<LogOut className="h-5 w-5" />
					Sign-out
				</Button>
			) : (
				<Button onClick={() => setIsDialogOpen(true)} className="justify-start">
					<LogOut className="h-5 w-5" />
					Sign-in
				</Button>
			)}
			<AuthDialog
				isOpen={isDialogOpen}
				onClose={() => setIsDialogOpen(false)}
			/>
		</div>
	);
};

export default AuthButtons;

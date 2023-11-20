import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from '@/components/ui/alert-dialog';

const ModalRestartExhibition = ({
    defaultOpen,
    resetExhibition
}: {
    defaultOpen: boolean;
    resetExhibition: () => void;
}) => {
    return (
        <>
            <AlertDialog defaultOpen={defaultOpen}>
                <AlertDialogContent className='bg-white font-acumin'>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Continue the exhibition?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            You currently have saved data on this exhibition, do
                            you want to continue? If exhibition is restarted all
                            the saved data will be gone!
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel
                            className='bg-red-500 text-white hover:bg-red-500/80 hover:text-white'
                            onClick={resetExhibition}
                        >
                            Restart
                        </AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default ModalRestartExhibition;

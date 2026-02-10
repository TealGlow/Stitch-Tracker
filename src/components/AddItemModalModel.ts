export type FormState = {
    name: string;
    type: string | undefined;
    startDate: string | undefined;
    endDate: string | undefined;
    notes: string | undefined;
};

export type FormErrorState = {
    nameError: string | undefined;
};

export type HandleFieldChangeFn = <K extends keyof FormState>(key: K, value:FormState[K]) => void;
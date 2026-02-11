export type FormStateAddProject = {
    name: string;
    type: string | undefined;
    startDate: string | undefined;
    endDate: string | undefined;
    notes: string | undefined;
    isFinished: boolean;
};

export type FormErrorStateAddProject = {
    nameError: string | undefined;
};

export type HandleFieldChangeFn = <K extends keyof FormStateAddProject>(key: K, value:FormStateAddProject[K]) => void;
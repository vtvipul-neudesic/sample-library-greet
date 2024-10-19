type GreetProps = {
    firstName: string;
    lastName: string;
};

declare const greet: ({ firstName, lastName }: GreetProps) => string;

export { GreetProps, greet };

import { GreetProps } from "./types";

export const greet = ({ firstName, lastName }: GreetProps): string =>
    `Hello ${lastName}, ${firstName}!`;

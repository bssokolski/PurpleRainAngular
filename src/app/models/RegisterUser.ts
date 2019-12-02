import { ExecFileOptionsWithStringEncoding } from 'child_process';

export interface RegisterUser{
    email:ExecFileOptionsWithStringEncoding;
    password: string;
    confirmPassword: string;
}
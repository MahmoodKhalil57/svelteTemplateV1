export type InputType = 'text' | 'email' | 'textarea';
export type Field = { id: string; label: string; type: InputType; placeHolder?: string };
export type FormStructure = Field[][];

export interface SelectModel<T = unknown> {
    value: T;
    text: string;
    selected?: boolean;
    disabled?: boolean;
    icon?: string;
}

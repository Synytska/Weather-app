export const truncateOutput = (input: string, maxLength: number) => {
    return input && input.length <= maxLength ? input : `${input.slice(0, 7)}...`;
};

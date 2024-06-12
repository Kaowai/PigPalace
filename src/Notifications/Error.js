export const InlineError = ({ text }) => {
    return (
        <div className="text-warning10 w-full mt-2 text-[10px] font-medium">
            <p>*{text}</p>
        </div>
    );
};

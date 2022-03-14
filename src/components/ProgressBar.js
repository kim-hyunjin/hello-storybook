import "./ProgressBar.css";

export default function ProgressBar({ value }) {
    return (
        <div className={"container"}>
            {value === 100 || value === 0 ? (
                <progress value={value} max={100} className={"fullbar"}></progress>
            ) : (
                <progress value={value} max={100} className={"bar"}></progress>
            )}
        </div>
    );
}

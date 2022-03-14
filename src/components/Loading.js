import "./Loading.css";

export default function Loading({ size, lineColor, backgroundColor }) {
    return (
        <>
            <div
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundImage: `linear-gradient(${backgroundColor}, ${backgroundColor}),
            linear-gradient(to right, transparent 0%, ${lineColor} 100%)`,
                }}
                className={"circle"}
            ></div>
        </>
    );
}

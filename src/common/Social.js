export default function Social({title="", text=""}) {
    return (
        <div>
            <div className="w-1/2 text-text-primary space-y-4">
                <div>
                    <h3>{title}</h3>
                </div>
                <div>
                    <p>{text}</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

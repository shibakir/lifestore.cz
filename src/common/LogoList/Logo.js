export default function Logo({ src, alt }) {
    return (
        <div
            className="w-full lg:w-11/12 h-32 bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: `url(${src})` }}
            role="img"
            aria-label={alt}
        />
    );
}

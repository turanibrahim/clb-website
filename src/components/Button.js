export default function Button({children, url, className}) {
    const styles = `btn ${className}`;

    return(
        <a className={styles} href={url}>{children}</a>
    )
}
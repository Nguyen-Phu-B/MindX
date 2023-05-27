const ErrorCustom = ({ err }) => {
    return (
        err && (
            <div style={{ color: "red", marginTop: '-12px' }}>
                <span>{err}</span>
            </div>
        )
    )
}
export default ErrorCustom;
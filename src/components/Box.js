const Box = ({ width = 100, height = 100, backgroundColor = "red"}) => {
    const style = {
        width: 100,
        height: 100,
        backgroundColor: "red",
    };
    return <div style={style} />;
};

export default Box;
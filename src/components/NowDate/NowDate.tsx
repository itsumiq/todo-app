export const NowDate = () => {
    return (
        <>
            <h1>{updateDate()}</h1>
        </>
    );
};

const updateDate = () => {
    let nowDate = `${new Date()}`;

    nowDate = nowDate.slice(0, 10).replace(" ", ", ");

    return nowDate;
};

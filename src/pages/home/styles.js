import { jsx, css } from "@emotion/react"

const styles = {
    mainBox: {
        height: "100vh",
        width: "100vw",
    },
    uploadButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "90px",
        height: "90px",
        borderRadius: "10px",
        background: "linear-gradient(315deg, #831E1E 0%, rgba(131, 30, 30, 0) 100%), #E16A6A",
    },
    pageIcon: {
        height: "80px",
        width: "80px",
    },
    disabledButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "90px",
        height: "90px",
        borderRadius: "10px",
        background: "linear-gradient(180deg, #C9C9C9 0%, #A4A4A4 100%)",
    },
    title: {
        textAlign: "center",
        fontSize: 48,
        paddingTop: "10vh",
        marginBottom: "40px",
    },
    textHoversLarge: {
        textAlign: "center",
        color: "white",
        fontSize: 22,
    },
    textHoversMed: {
        textAlign: "center",
        color: "white",
        fontSize: 22,
    },
    textHoversSmall: {
        textAlign: "center",
        color: "white",
        fontSize: 15,
    },
    textHoversBox: {
        padding: "10px",
        borderRadius: "32px",
        backgroundColor: "black",
    },
    barDeco1: {
        marginTop: "10px",
        height: "50vh",
        width: "18vw",
        background: "linear-gradient(180deg, #FACC72 0%, #ECD076 13.02%, #FACC72 26.56%, #8EE98D 100%)",
        borderRadius: "30px",
    },
    barDeco2: {
        marginTop: "10px",
        height: "60vh",
        width: "18vw",
        background: "linear-gradient(180deg, #E16A6A 0%, #FACC72 32.81%, #FACC72 50%, #8EE98D 100%)",
        borderRadius: "30px",
    },
    barDeco3: {
        marginTop: "10px",
        height: "30vh",
        width: "18vw",
        background: "linear-gradient(180deg, #FACC72 0%, #8EE98D 100%)",
        borderRadius: "30px",
    },
    barContainer: {
        position: "fixed",
        bottom: "-30px",
        left: "0",
        right: "0",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        padding: "0px",
        gap: "62px",
    },
    buttonContainer: {
        position: "fixed",
        top: "30px",
        left: "0",
        right: "0",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        padding: "0px",
        gap: "50px",
    },
    next: {
        position: "fixed",
        bottom: "50vh",
        right: "5vw",
        height: "3vw",
        width: "3vw",
    }
};

export default styles;
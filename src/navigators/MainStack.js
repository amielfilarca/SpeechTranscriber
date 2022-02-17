import React from "react";
import navigationStrings from "../constant/navigationStrings";
import TabRoutes from "./TabRoutes";

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name={navigationStrings.STABS}
                component={TabRoutes} />
        </>
    )
}
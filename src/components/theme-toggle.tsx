'use client';

import {Button} from "@/components/ui/button";
import {SunIcon, MoonIcon} from "lucide-react";
import {useTheme} from 'next-themes';
import {useEffect, useState} from "react";

export const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="flex justify-end p-4">
                <Button
                    size="sm"
                    variant="ghost"
                    disabled
                >
                    <SunIcon className="mr-2 h-4 w-4"/>
                    Light
                </Button>
                <Button
                    size="sm"
                    variant="ghost"
                    disabled
                >
                    <MoonIcon className="mr-2 h-4 w-4"/>
                    Dark
                </Button>
            </div>
        )
    }

    return (
        <div className="flex justify-end p-4">
            <Button
                size="sm"
                variant="ghost"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            >
                {resolvedTheme === "dark" ? (
                    <>
                        <SunIcon className="mr-2 h-4 w-4"/>
                        Light
                    </>
                ) : (
                    <>
                        <MoonIcon className="mr-2 h-4 w-4"/>
                        Dark
                    </>
                )}
            </Button>
        </div>
    );
};


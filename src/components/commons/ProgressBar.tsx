import { cn } from "@/utils/utils";
import React, { useEffect, useState } from "react";

interface ProgressBarProps {
    progress: number;
    className?: string;
    fillclassname?: string;
    duration?: number;
}

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
    ({ progress, className, ...props }, ref) => {
        return (
        <div
            {...props}
            ref={ref}
            className={cn("w-full h-1 bg-[#f2f2f2] rounded-full overflow-hidden", className)}
        >
            <div className={cn("h-full bg-[#47c884]", props.fillclassname)} style={{ 
                width: `${progress}%`,
                transition: `width ${props.duration || 2}s ease-in-out`,
                textAlign: "right",
                }}></div>
        </div>
        );
    }
    );

ProgressBar.displayName = "ProgressBar";


export const SegmentedProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
    ({ progress, className, ...props }, ref) => {
        const [progress1, setProgress1] = useState(0);
        const [progress2, setProgress2] = useState(0);
        const [progress3, setProgress3] = useState(0);

        useEffect(() => {
            setProgress1(progress * 0.33);
            setTimeout(() => setProgress2(progress * 0.33), 1000);
            setTimeout(() => setProgress3(progress * 0.34), 2000);

            return () => {
                setProgress1(0);
                setProgress2(0);
                setProgress3(0);
            }
        }, [progress]);

        return (
            <div
                {...props}
                ref={ref}
                className={cn("w-full h-1 bg-[#f2f2f2] rounded-full overflow-hidden", className)}
            >
                <div className="h-full space-x-1" style={{ display: 'flex', width: '100%' }}>
                    <div className="bg-green-500 rounded-xl" style={{ 
                        width: `${progress1}%`,
                        transition: "width 1s ease-in-out",
                    }}></div>
                    <div className="bg-yellow-500 rounded-xl" style={{ 
                        width: `${progress2}%`,
                        transition: "width 1s ease-in-out",
                    }}></div>
                    <div className="bg-[#8d00f6] rounded-xl" style={{ 
                        width: `${progress3}%`,
                        transition: "width 1s ease-in-out",
                    }}></div>
                </div>
            </div>
        );
    }
    );
SegmentedProgressBar.displayName = "SegmentedProgressBar";
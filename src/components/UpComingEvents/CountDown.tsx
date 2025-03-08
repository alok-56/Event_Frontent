import { useState, useEffect } from 'react';

interface TimeLeft {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}

const CountDown = ({ dateInt }: { dateInt: string }) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(dateInt));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(dateInt)); // Ensure we recalculate based on the updated dateInt
        }, 500);

        return () => clearInterval(timer); // Cleanup on unmount
    }, [dateInt]); // Re-run the effect when dateInt changes

    function calculateTimeLeft(dateInt: string): TimeLeft {
        const difference = new Date(dateInt).getTime() - new Date().getTime();
        let time: TimeLeft = {};

        if (difference > 0) {
            time = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return time;
    }

    return (
        <div className='flex items-center'>
            {timeLeft.seconds === undefined ? (
                <div className="font-Poppins xl:text-xl text-red-500">Time's Up !!</div>
            ) : (
                <div className="sm:text-3xl text-xl font-semibold font-Josefin text-center text-yellow-400">
                    {`${timeLeft.days}d | ${timeLeft.hours}h | ${timeLeft.minutes}m | ${timeLeft.seconds}s`}
                </div>
            )}
        </div>
    );
};

export default CountDown;

export const CurrentWeatherSceleton = () => (
    <div className="border-[12px] p-4 bg-sceleton_main  flex flex-col justify-between border-sceleton_border xl:w-[552px] md:h-[322px] h-[269px] rounded-lg">
        <div className="flex flex-row justify-between items-start pb-3">
            <div>
                <div className="bg-sceleton_items  rounded-full  mb-6 w-[112px] h-[29px]"></div>
                <div className="h-5 mb-2 rounded-lg bg-sceleton_items w-[112px]"></div>
                <div className="h-4 w-12 rounded-lg bg-sceleton_items"></div>
            </div>
            <div className="w-[68px] h-[29px] bg-sceleton_items  rounded-full"></div>
        </div>

        <div className="flex justify-between items-center">
            <div className="size-[100px] md:w-[120px] md:h-[130px] rounded-lg bg-sceleton_items"></div>
            <div className="flex flex-col items-end mt-[-40px] gap-4">
                <div className="size-[100px] md:size-[160px] rounded-full bg-sceleton_items"></div>
                <div className="w-[108px] h-[21px] rounded-lg bg-sceleton_items"></div>
            </div>
        </div>
    </div>
);

export const HighlightsSceleton = () => (
    <div className="border-[12px] p-4 bg-sceleton_main  flex flex-col justify-between border-sceleton_border rounded-lg">
        <div className="bg-sceleton_items rounded-full w-[200px] h-[30px]"></div>
        <div className="grid grid-cols-2 gap-5 mt-6">
            <div className="bg-sceleton_items rounded-lg  h-[122px] w-[100%] md:h-[134px]"></div>
            <div className="bg-sceleton_items rounded-lg  h-[122px] w-[100%] md:h-[134px]"></div>
            <div className="bg-sceleton_items rounded-lg  h-[122px] w-[100%] md:h-[134px]"></div>
            <div className="bg-sceleton_items rounded-lg  h-[122px] w-[100%] md:h-[134px]"></div>
        </div>
    </div>
);

export const ForecastSceleton = () => (
    <div className="border-[12px] p-4 bg-sceleton_main  flex flex-col justify-between border-sceleton_border rounded-lg gap-6">
        <div className="bg-sceleton_items rounded-full w-[150px] h-[30px]"></div>
        <div className="bg-sceleton_items rounded-lg h-[350px] md:h-[166px]"></div>
        <div className="bg-sceleton_items rounded-lg h-[112px]"></div>
    </div>
);

export const OtherCitiesSceleton = () => (
    <>
    <div className="bg-sceleton_items rounded-full w-[200px] h-[40px] mt-4"></div>
    <div className="border-[12px] p-4 bg-sceleton_main  flex flex-col justify-between border-sceleton_border rounded-lg gap-6 mt-4">
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-sceleton_items rounded-lg h-[173px]"></div>
            <div className="bg-sceleton_items rounded-lg h-[173px]"></div>
        </div>
    </div>
    </>
);


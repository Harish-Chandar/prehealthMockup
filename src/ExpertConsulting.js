export function ExpertConsulting(){
    return(
        <div class="rounded-lg m-6 border-2 border-gray-500 border-solid">
            <div class="flex flex-nowrap justify-center">
                <img alt="cap" src="./images/cap.png" />
                <p class="mt-2 ml-2 mr-2 font-bold text-center"> Get Expert Consulting </p>
            </div>
            <p class="max-w-sm text-center mt-2 ms-2 mr-2 mb-0 text-gray-700">Our interviewers are all physicians who have served on admissions committees and have conducted medical school interviews. Over 99% of students that recieve feedback feel well prepared.</p>
            <div class="flex justify-center">
                <input type="button" value="Connect With Us" class="text-gray-200 w-[180px] h-[48px] my-3 size-6 text-lg bg-theme rounded-lg border-solid border-2 border-blue-400 text-center"/>
            </div>
        </div>
    );
}
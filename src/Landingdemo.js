import { Navbar } from "./Navbar";
import { SpeechEmotionDetection } from "./SpeechEmotionDetection";
import { ExpertConsulting } from "./ExpertConsulting";
import { ResponseAnalysis } from "./ResponseAnalysis";
import { ResponseAnalysisPara } from "./ResponseAnalysisPara";

export function Landingdemo(){
    return(
        <div class="flex justify-center">
        <div class="flex-col w-4/5 border-dashed border-red-800 border-2">
            <div class="basis-1 flex-row">
                <Navbar />
            </div>
            <div class="flex justify-evenly"> { /*or maybe justify-stretch*/ }
                <SpeechEmotionDetection />
                <ResponseAnalysis />
                <ExpertConsulting />
            </div>
            <ResponseAnalysisPara />
        </div>
        </div>
    );
}
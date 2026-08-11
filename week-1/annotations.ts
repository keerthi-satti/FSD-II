//PROGRAM WITH ANNOTATIONS
//  1. Variable Annotations with cope community 
let communityTitle: string = "COPE";
let membersCount: number = 23;
let isPychology: boolean = true;
// 2. Function Parameter and Return Type Annotations
function getCommmuntityStatus(title: string, count: number): string {
return `${title} community has ${count} members.`;
}
// 3. Array Annotations (List of strings)
let leads: string[] = ["Devika Mam", "Sarvani", "Keerthi"];
// 4. Using the annotated variables and functions
const summary: string = getCommmuntityStatus(communityTitle, membersCount);
//הכנסת ערכי המייל והססמא שהמשתמש הקיש בדף הכניסה, בנסיון הכניסה לאתר-השמורים בסשן סטורז:
//שליפה מהסשן סטורז את ערכי המייל והסיסמא שהזין המשתמש ושמירתם במשתנים
let email=sessionStorage.getItem("Email"); //שליפה מהסשן סטורז' את ערך המייל שהוקש ושמירה במשתנה
let password=sessionStorage.getItem("Password"); //שליפה מהסשן סטורז' את ערך הססמא שהוקשה ושמירה במשתנה

let inputArr=document.getElementsByTagName('input'); //שמירה במשתנה את מערך האינפוטים המוצגים על המסך

//הצבת ערכי הססמא והמייל שהוקשו בתיבות הטקסט המתאימות
inputArr[2].value=email; //הצבת ערך המייל שהוקש-בתיבת הטקסט המתאימה
inputArr[3].value=password; //הצבת ערך הססמא שהוקשה-בתיבת הטקסט המתאימה


//----------------------------------------------------------------------------------------------------------------------
//פונקציה הבונה אובייקט ליוזר שנרשם, שומרת אותו בלוקל סטורז, ומעבירה את המשתמש לדך האתר הראשי
//הפונקציה תבצע את הפעולות הבאות:
//1. בניית אובייט שיכיל את פרטי היוזר שהוקשו.
//2. שמירת האובייקט בלוקל סטורז.
//3. בנוסף, הפונקציה תשמור בלוקל סטורז גם את שמו המלא של המשתמש-לצורך הצבה באייקון היוזר שבדפי האתר
//4. העברת המשתמש לדף האתר הראשי.
function buildObjectAndSave()
{
   //פעולה מספר 1:
   //הגדרת אובייקט יוזר. הגישה לערכים שהוקשו נעשה על-יידי מערך האינפוטים שהוגדר למעלה
   let userObject=
   {
     FirstName: inputArr[0].value,
     LastName: inputArr[1]. value,
     Email: inputArr[2].value,
     Password: inputArr[3].value
   }

   //פעולה מספר 2:
   //שמירת האובייקט בלוקל סטורז:
   //localStorage.setItem(ערך המפתח, מפתח)
   localStorage.setItem(userObject.Email, JSON.stringify(userObject));
   //הסבר על שורת הקוד הנ"ל-המבצעת את השמירה בלוקל סטורז:
   //1. יש לשמור מפתח ייחודי. לכן-נבחר כתובת האימייל להוות מפתח המייצג את היוזר בלוקל סטורז
   // 2. כיון שהסשן מזהה רק סטרינגים, ולא אובייקטים-נמיר את ערך המפתח לסטרינג-על-ידיי הקוד הבא:
   //JSON.stringify(userObject)

   //פעולה מספר 3:
   let firstName=userObject.FirstName; //שמירה במשתנה את שמו הפרטי של המשתמש
   let lastName=userObject.LastName; //שמירה במשתנה את שם המשפחה של המשתמש
   let fullName=firstName+" "+lastName; //שמירה במשתנה את שמו המלא של היוזר-על-יידי שרשור של שמו הפרטי ושם המשפחה שלו, עם רווח ביניהם
   localStorage.setItem('FullName', fullName); //שמירת שמו המלא של המשתמש בלוקל סטורז-לצורך הצבתו על-יד אייקון היוזר בדפי האתר

   //פעולה מספר 4:
   //העברת המשתמש לאתר-לדף הראשי
   window.open('../Main window/Main window.html');
}
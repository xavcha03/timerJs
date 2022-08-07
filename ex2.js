/**
 * Exercise 2

Write a function that displays every 
second that has passed on the page since it was opened. 
The display should be refreshed every second. 
If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" 
(for 120 seconds and more), etc.
 */

time();

function time(start = 0) {
	console.log(start);
	if (start % 60 == 0) {
		console.log(start / 60 + " minutes elapsed ");
	}
	setTimeout(() => time(start + 1), 1000);
}

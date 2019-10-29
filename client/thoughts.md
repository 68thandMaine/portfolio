# THoughts and Planning

I need to change the contact view to a function that checks for a status code from emailjs. If the status code = 0 then show the form. if the status code = 200 then show the success modal. if the status code = 400 then show the failure modal.

We have two modals that show the failure and success messages. What we could do is have a switch/case that goes through the various status codes to return a different dispaly. Basically when the /contact view loads I show.


New idea. We will refactor the entire contact form so that there are no hidden edivs. I've noticed that this isn't a trend. It could be cool to make a different type, but also, is separating all of the contact field sa good idaea? Is it a mature idea? Is it MINIMALISTIC? I think that there's better way's to do the form. You preach acccessibilty, but you don't really practice it. How about this:
One form with inputs that have an animation around the fields? You must consider developing UI for the next gen. Look to Sifi shows for inspiration.
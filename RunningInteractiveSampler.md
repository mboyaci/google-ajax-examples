1.  Install SVN.  If you want a simple GUI interface get Tortoise SVN for Windows or ZigVersion for Mac.  If you're using Linux  you shouldn't need any help with SVN.

2.  Pull down the project from this URL if you will be committing to the project:

https://google-ajax-examples.googlecode.com/svn/trunk/interactive_samples/

and this URL if you aren't listed as a member/admin of this project:

http://google-ajax-examples.googlecode.com/svn/trunk/interactive_samples/

If you're using command line that's:
svn checkout https://google-ajax-examples.googlecode.com/svn/trunk/interactive_samples/

Your username is your e-mail address on the project, your password can be found by going to code.google.com/p logging in then clicking Profile then Settings.

3.  Download App Engine http://code.google.com/appengine/downloads.html

4.  Run app engine on the directory that you pulled down from SVN.
./dev\_appserver.py interactive\_samples --port 8081

Then go to localhost:8081/ or localhost:8081/apis/ajax/playground/
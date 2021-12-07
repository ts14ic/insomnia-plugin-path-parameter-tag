# Path parameter tag Insomnia plugin

A template tag, that can be used inside URIs as path parameters.  

![uri preview with display name](./screenshots/uri-preview-with-display-name.png)

## Usage

Add the plugin to Insomnia by its name: "insomnia-plugin-path-parameter-tag".  

Create/edit a request, and when you want a path parameter:
* either press ctrl+space to insert the "Path parameter" tag
* or type `{% pathParam %}`, which does the same.

Here's an example of a URI with the value of `https://example.com/{% pathParam %}`.  
![empty tag](./screenshots/empty.png)

Click on the tag to edit its Value and optionally Display name.  
![edit dialog](./screenshots/edit-dialog.png)

Only "Value" is required - this will be sent with the request.
Here's the URI and CURL previews with the request above, and a value set:  
![uri preview](./screenshots/uri-preview-with-value.png)
![curl preview](./screenshots/curl-preview.png)

"Description" is not sent anywhere, and is there only for documentation purpose.  

"Display name" is also not sent anywhere, but you can use it to configure the look of the tag in Insomnia UI.  
![uri preview with display name](./screenshots/uri-preview-with-display-name.png)

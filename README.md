# Webform multifile delete by anonymous

This module allows anonymous users the delete files from a webform.

When the *autosave_webform* module is enabled and the *webform_multifile* module
the uploaded files are saved every time the autosaving of the form happens. 
This will result in the files being uploaded and with a delete button however
when the anonymous user has no access right to edit the submission he is also
denied the deletion of the uploaded file.

This will prevent the user to correct uploaded files. This module will correct
that behaviour.

## Technicall implementation

This module implements hook webform_component_alter to reset the theme function
for multifile components.
The theme function is set to our own theme function (which is a slightly modified
 version of the original theme function provided by the *webform_multifile* module).
 
The delete function is implemented through a ajax callback. 
The javascript handling for the delete function is in the file *webform_multifile_deletebyanonymous.js*
 

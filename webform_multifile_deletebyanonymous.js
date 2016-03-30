/**
 * Created by jaap on 3/21/16.
 */

function webform_multifile_deletebyanonymous_delete(fid, el) {
  jQuery.get('/webform_multifile_deletebyanonymous/'+fid, function(data, status) {
    jQuery(el).parent().remove();
  });
}
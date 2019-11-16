import { helper } from '@ember/component/helper';
import { isHTMLSafe, htmlSafe as htmlSafeString } from '@ember/template';

export function htmlSafe([context, ...partialArgs]/*, hash*/) {

  // @on-eventName={{html-safe (fn (mut this.content))}}
  if (typeof context === 'function') {
    return function toStringClosure(content, ...closureArgs) {
      let contentSafeString = (
        isHTMLSafe(content) ?
        content :
        htmlSafeString(content)
      );
      return context(contentSafeString, ...partialArgs, ...closureArgs);
    };

  // @content={{html-safe this.content}}
  } else {
    return (
      isHTMLSafe(context) ?
      context :
      htmlSafeString(context)
    );
  }

}

export default helper(htmlSafe);

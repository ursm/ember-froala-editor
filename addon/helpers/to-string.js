import { helper } from '@ember/component/helper';

export function toString([context, ...partialArgs]/*, hash*/) {

  // @update={{to-string (fn (mut this.content))}}
  if (typeof context === 'function') {
    return function toStringClosure(content, ...closureArgs) {
      let contentString = (
        content && typeof content.toString === 'function' ?
        content.toString() :
        content
      );
      return context(contentString, ...partialArgs, ...closureArgs);
    };

  // {{to-string this.content}}
  } else {
    return (
      context && typeof context.toString === 'function' ?
      context.toString() :
      context
    );
  }

}

export default helper(toString);

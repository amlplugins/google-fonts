/**
 * @amlplugins/google-fonts
 *
 * Thin namespaced re-export of the native @googleapis/webfonts SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Google Fonts Developer API.
 */

import * as _sdk from "@googleapis/webfonts";
export * from "@googleapis/webfonts";
export { _sdk as sdk };
export default _sdk;

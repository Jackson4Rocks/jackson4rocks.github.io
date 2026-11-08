import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const content = readFileSync(join(root, "content.js"), "utf8");
const app = readFileSync(join(root, "app.js"), "utf8");
const html = readFileSync(join(root, "index.html"), "utf8");

test("the March 2027 availability notice remains unchanged", () => {
  assert.ok(content.includes("Currently offline — Back in March 2027"));
});

test("deprecated or excluded projects never appear in site content", () => {
  const source = [content, app, html].join("\n");
  const excluded = ["Calypso " + "Linux", "Calculator" + "Vault"];
  for (const phrase of excluded) {
    assert.equal(source.toLowerCase().includes(phrase.toLowerCase()), false, phrase + " must not appear");
  }
});

test("the portfolio uses one central project and copy file", () => {
  assert.match(html, /<script src="content\.js"><\/script>/);
  assert.match(html, /<script src="app\.js"><\/script>/);
  assert.match(content, /name:"GlyphOS"/);
  assert.match(content, /name:"OneGlyph"/);
  assert.match(content, /name:"PublivoreTube"/);
});

test("the OneGlyph visual uses the supplied Nothing Phone photo asset", () => {
  assert.match(app, /assets\/oneglyph-phone-preview\.svg/);
  assert.match(content, /https:\/\/github\.com\/Jackson4Rocks\/OneGlyph/);
});

test("accessibility and reduced-motion support are present", () => {
  assert.match(app, /aria-expanded/);
  assert.match(app, /Escape/);
  assert.match(html, /prefers-reduced-motion:reduce/);
});

import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const content = readFileSync(join(root, "content.js"), "utf8");
const app = readFileSync(join(root, "app.js"), "utf8");
const html = readFileSync(join(root, "index.html"), "utf8");

test("temporary availability and return-date messaging is absent", () => {
  const source = [content, app, html].join("\n").toLowerCase();
  assert.equal(source.includes("currently offline"), false);
  assert.equal(source.includes("march 2027"), false);
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


test("the VS Code profile file is displayed as ~/leon.profile without a Lua extension", () => {
  assert.match(content, /-- ~\/leon\.profile/);
  assert.doesNotMatch(content, /leon\.profile\.lua/);
  assert.match(app, /Visual Studio Code — <b>~\/leon\.profile<\/b>/);
  assert.doesNotMatch(app, /leon\.profile\.lua/);
});

test("Retro98 is featured with its v1.0 APK download", () => {
  assert.match(content, /name:"Retro98"/);
  assert.match(content, /Retro98\/releases\/download\/Release\/Retro98\.v1\.0\.apk/);
  assert.match(app, /function retroPreview/);
  assert.match(app, /Download APK/);
});

test("new Linux projects and utilities are represented", () => {
  assert.match(content, /name:"GlyphDotfiles"/);
  assert.match(content, /name:"Tahoe Recovery"/);
  assert.match(content, /https:\/\/github\.com\/Jackson4Rocks\/GlyphDotfiles/);
});


test("the website includes the same animated Pac-Man contribution graph as the profile README", () => {
  assert.match(app, /pacman-contribution-graph-dark\.svg/);
  assert.match(app, /Animated Pac-Man contribution graph/);
  assert.match(index, /\.contribution-graph img/);
});

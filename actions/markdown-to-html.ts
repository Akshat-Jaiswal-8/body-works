// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import 'tailwindcss/tailwind.css';

const rules = [
  //header rules
  [/#{6}\s?([^\n]+)/g, "<h6 style='font-size: 5px'>$1</h6>"],
  [/#{5}\s?([^\n]+)/g, "<h5 style='font-size: 10px'>$1</h5>"],
  [/#{4}\s?([^\n]+)/g, "<h4 style='font-size: 20px'>$1</h4>"],
  [/#{3}\s?([^\n]+)/g, "<h3 style='font-size: 30px'>$1</h3>"],
  [/#{2}\s?([^\n]+)/g, "<h2 style='font-size: 1.125rem;  line-height: 1.625;'>$1</h2>"],
  [
    /#{1}\s?([^\n]+)/g,
    "<h1 class='text-red-600' style='font-size: 1.25rem;color:black)) ; font-weight: 600; margin-bottom: 20px ; line-height: 1.625;" +
      "} '>$1</h1>",
  ],

  //bold, italics and paragraph rules
  [/\*\*\s?([^\n]+)\*\*/g, '<b>$1</b>'],
  [/\*\s?([^\n]+)\*/g, '<i>$1</i>'],
  [/__([^_]+)__/g, '<b>$1</b>'],
  [/_([^_`]+)_/g, '<i>$1</i>'],
  [/([^\n]+\n?)/g, '<p>$1</p>'],

  //links
  [/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#2A5DB0;text-decoration: none;">$1</a>'],

  //highlights
  [
    /(`)(\s?[^\n,]+\s?)(`)/g,
    '<a style="background-color:grey;color:black;text-decoration: none;border-radius: 3px;padding:0 2px;">$2</a>',
  ],

  //Lists
  [/([^\n]+)(\+)([^\n]+)/g, '<ul><li>$3</li></ul>'],
  [/([^\n]+)(\*)([^\n]+)/g, '<ul><li>$3</li></ul>'],

  //Image
  [/!\[([^\]]+)\]\(([^)]+)\s"([^")]+)"\)/g, '<img src="$2" alt="$1" title="$3" />'],
];

export const markdownToHtml = (text: string) => {
  let html: string = text;
  rules.forEach(([rule, template]) => {
    html = html.replace(rule, template);
  });
  return html;
};

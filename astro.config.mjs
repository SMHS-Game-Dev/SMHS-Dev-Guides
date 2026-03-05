// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightUtils from '@lorenzo_lewis/starlight-utils';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SMHS Game Dev Club',
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://smhsgame.dev/logo.png',
					},
				},
			],
			description: 'Guides for the game dev club.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/SMHS-Game-Dev' }],
			plugins: [
				starlightUtils({
					multiSidebar: {
						switcherStyle: 'horizontalList',
					},
				}),
			],
			sidebar: [
				{
					label: 'Git & GitHub',
					items: [
						{
							label: 'Getting Started',
							items: [
								{ label: 'What is Git & GitHub?', slug: 'git/what-is-git' },
								{ label: 'One-Time Setup', slug: 'git/setup' },
							],
						},
						{
							label: 'Contributing',
							items: [
								{ label: 'The Contribution Workflow', slug: 'git/workflow' },
								{ label: 'Git Commands', slug: 'git/commands' },
							],
						},
						{
							label: 'Troubleshooting',
							items: [
								{ label: 'Common Problems', slug: 'git/troubleshooting' },
								{ label: 'Cheat Sheet', slug: 'git/cheatsheet' },
							],
						},
					],
				},
				{
					label: 'Godot',
					items: [
						{
							label: 'Getting Started',
							items: [
								{ label: 'Introduction to Godot', slug: 'godot/introduction' },
							],
						},
						{
							label: 'Core Concepts',
							items: [
								{ label: 'Your First Scene', slug: 'godot/first-scene' },
							]
						},
						{
							label: 'Scripting',
							items: [
								{ label: 'Scripting Basics', slug: 'godot/scripting-basics' },
							],
						},
					],
				},
			],
		}),
	],
});

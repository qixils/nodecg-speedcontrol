/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type RunDataArray = RunData[];

export interface RunData {
	game?: string;
	gameTwitch?: string;
	system?: string;
	region?: string;
	release?: string;
	category?: string;
	estimate?: string;
	estimateS?: number;
	setupTime?: string;
	setupTimeS?: number;
	scheduled?: string;
	scheduledS?: number;
	relay?: boolean;
	commentators: {
		name: string;
		id: string;
		country?: string;
		pronouns?: string;
		social: {
			twitch?: string;
		};
		customData: {
			[k: string]: string;
		};
	}[];
	teams: {
		name?: string;
		id: string;
		relayPlayerID?: string;
		players: {
			name: string;
			id: string;
			teamID: string;
			country?: string;
			pronouns?: string;
			social: {
				twitch?: string;
			};
			customData: {
				[k: string]: string;
			};
		}[];
	}[];
	customData: {
		[k: string]: string;
	};
	id: string;
	externalID?: string;
}

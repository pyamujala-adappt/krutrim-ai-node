import type { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class KrutrimAi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Krutrim AI',
		name: 'krutrim',
		// hidden: true,
		icon: { light: 'file:kru_logo.svg', dark: 'file:kru_logo.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume Krutrim AI',
		defaults: {
			name: 'Krutrim',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'KrutrimApi',
				required: true,
			},
		],
		requestDefaults: {
			ignoreHttpStatusErrors: true,
			baseURL: 'https://cloud.olakrutrim.com/v1',
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Chat',
						value: 'chat'
					},
					{
						name: 'FIM',
						value: 'fim'
					}
				],
				default: 'chat',
			},
		],
	};
}
import { validate } from "../helpers";

const streamDocumentService = function streamDocumentService(client, args) {
	const valid = validate(args, {
		"type": "string",
		"id": "string"
	});
	if(valid !== true) {
		throw valid
		return
	}
	const type = args.type;
	const id = args.id;
	delete args.type
	delete args.id
	delete args.stream

	if(args.stream === true || args.stream === "true") {
		args.stream = "true"
	} else {
		delete args.stream
		args.streamonly = "true"
	}

	return client.performWsRequest({
		method: "GET",
		path: `${type}/${id}`,
		params: args,
	})
};


export default streamDocumentService;

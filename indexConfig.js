var config = {
    host: 'localhost:9200',
    index: 'suggester',
    type: 'classified',
    mapping: {
        classified: {
            properties: {
                'suggest': {
                    'type': 'completion',
                    'index_analyzer': 'simple',
                    'search_analyzer': 'simple',
                    'payloads': false
                }
            }
        }
    },
    settings: {
        'analysis': {
            'analyzer': {
                'autocomplete_2': {
                    'tokenizer': 'keyword',
                    'filter': ['lowercase', 'edge_ngram_2']
                }
            },
            filter: {
                'edge_ngram_2': {
                    type: 'edgeNGram',
                    max_gram: 50
                }
            }
        }
    }
};

module.exports = config;
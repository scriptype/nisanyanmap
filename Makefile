TEST_DIR = ./test
CLI_PATH = ./cli/cli

.PHONY: test

test:
	@node $(TEST_DIR)/programmatic
	@make cli_test

cli_test:
	@node $(CLI_PATH) | node $(TEST_DIR)/command-line --no-parameters

	@node $(CLI_PATH) istanbul | node $(TEST_DIR)/command-line --place

	@node $(CLI_PATH) istanbul -s | node $(TEST_DIR)/command-line --place-silent
	@node $(CLI_PATH) istanbul --silent | node $(TEST_DIR)/command-line --place-silent

	@node $(CLI_PATH) istanbul -v | node $(TEST_DIR)/command-line --place-verbose
	@node $(CLI_PATH) istanbul --verbose | node $(TEST_DIR)/command-line --place-verbose

	@node $(CLI_PATH) istanbul -s -v | node $(TEST_DIR)/command-line --place-silent-verbose
	@node $(CLI_PATH) istanbul -s --verbose | node $(TEST_DIR)/command-line --place-silent-verbose
	@node $(CLI_PATH) istanbul --silent -v | node $(TEST_DIR)/command-line --place-silent-verbose
	@node $(CLI_PATH) istanbul --silent --verbose | node $(TEST_DIR)/command-line --place-silent-verbose
	@node $(CLI_PATH) istanbul -v -s | node $(TEST_DIR)/command-line --place-silent-verbose
	@node $(CLI_PATH) istanbul --verbose -s | node $(TEST_DIR)/command-line --place-silent-verbose
	@node $(CLI_PATH) istanbul -v --silent | node $(TEST_DIR)/command-line --place-silent-verbose
	@node $(CLI_PATH) istanbul --verbose --silent | node $(TEST_DIR)/command-line --place-silent-verbose

	@node $(CLI_PATH) -pd | node $(TEST_DIR)/command-line --print-dates
	@node $(CLI_PATH) --print-dates | node $(TEST_DIR)/command-line --print-dates

	@node $(CLI_PATH) -ps | node $(TEST_DIR)/command-line --print-sources
	@node $(CLI_PATH) --print-sources | node $(TEST_DIR)/command-line --print-sources

	@node $(CLI_PATH) -h | node $(TEST_DIR)/command-line --help
	@node $(CLI_PATH) --help | node $(TEST_DIR)/command-line --help
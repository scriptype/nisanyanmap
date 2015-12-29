TEST_DIR = ./test
CLI_PATH = ./cli/cli
TEST_PLACE = 'istanbul'

.PHONY: test

test:
	@node $(TEST_DIR)/programmatic
	@make cli_test

cli_test:
	@node $(CLI_PATH) | node $(TEST_DIR)/command-line --no-parameters

	@node $(CLI_PATH) $(TEST_PLACE) | node $(TEST_DIR)/command-line --place

	@node $(CLI_PATH) $(TEST_PLACE) -s | node $(TEST_DIR)/command-line --place-silent
	@node $(CLI_PATH) $(TEST_PLACE) --silent | node $(TEST_DIR)/command-line --place-silent

	@node $(CLI_PATH) $(TEST_PLACE) -v | node $(TEST_DIR)/command-line --place-verbose
	@node $(CLI_PATH) $(TEST_PLACE) --verbose | node $(TEST_DIR)/command-line --place-verbose

	@node $(CLI_PATH) $(TEST_PLACE) -s -v | node $(TEST_DIR)/command-line --place-silent-verbose
	@node $(CLI_PATH) $(TEST_PLACE) -s --verbose | node $(TEST_DIR)/command-line --place-silent-verbose
	@node $(CLI_PATH) $(TEST_PLACE) --silent -v | node $(TEST_DIR)/command-line --place-silent-verbose
	@node $(CLI_PATH) $(TEST_PLACE) --silent --verbose | node $(TEST_DIR)/command-line --place-silent-verbose
	@node $(CLI_PATH) $(TEST_PLACE) -v -s | node $(TEST_DIR)/command-line --place-silent-verbose
	@node $(CLI_PATH) $(TEST_PLACE) --verbose -s | node $(TEST_DIR)/command-line --place-silent-verbose
	@node $(CLI_PATH) $(TEST_PLACE) -v --silent | node $(TEST_DIR)/command-line --place-silent-verbose
	@node $(CLI_PATH) $(TEST_PLACE) --verbose --silent | node $(TEST_DIR)/command-line --place-silent-verbose

	@node $(CLI_PATH) -pd | node $(TEST_DIR)/command-line --print-dates
	@node $(CLI_PATH) --print-dates | node $(TEST_DIR)/command-line --print-dates

	@node $(CLI_PATH) -ps | node $(TEST_DIR)/command-line --print-sources
	@node $(CLI_PATH) --print-sources | node $(TEST_DIR)/command-line --print-sources

	@node $(CLI_PATH) -h | node $(TEST_DIR)/command-line --help
	@node $(CLI_PATH) --help | node $(TEST_DIR)/command-line --help
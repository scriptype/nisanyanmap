BIN = ./node_modules/.bin
TEST_DIR = ./test
CLI_PATH = ./cli/cli
TEST_PLACE = 'istanbul'

.PHONY: test

test:
	@node $(TEST_DIR)/programmatic | $(BIN)/tap-spec
	@make cli_test

cli_test:
	@node $(CLI_PATH) | node $(TEST_DIR)/command-line --no-parameters | $(BIN)/tap-spec

	@node $(CLI_PATH) $(TEST_PLACE) | node $(TEST_DIR)/command-line --place | $(BIN)/tap-spec

	@node $(CLI_PATH) $(TEST_PLACE) -s | node $(TEST_DIR)/command-line --place-silent | $(BIN)/tap-spec
	@node $(CLI_PATH) $(TEST_PLACE) --silent | node $(TEST_DIR)/command-line --place-silent | $(BIN)/tap-spec

	@node $(CLI_PATH) $(TEST_PLACE) -v | node $(TEST_DIR)/command-line --place-verbose | $(BIN)/tap-spec
	@node $(CLI_PATH) $(TEST_PLACE) --verbose | node $(TEST_DIR)/command-line --place-verbose | $(BIN)/tap-spec

	@node $(CLI_PATH) $(TEST_PLACE) -s -v | node $(TEST_DIR)/command-line --place-silent-verbose | $(BIN)/tap-spec
	@node $(CLI_PATH) $(TEST_PLACE) -s --verbose | node $(TEST_DIR)/command-line --place-silent-verbose | $(BIN)/tap-spec
	@node $(CLI_PATH) $(TEST_PLACE) --silent -v | node $(TEST_DIR)/command-line --place-silent-verbose | $(BIN)/tap-spec
	@node $(CLI_PATH) $(TEST_PLACE) --silent --verbose | node $(TEST_DIR)/command-line --place-silent-verbose | $(BIN)/tap-spec
	@node $(CLI_PATH) $(TEST_PLACE) -v -s | node $(TEST_DIR)/command-line --place-silent-verbose | $(BIN)/tap-spec
	@node $(CLI_PATH) $(TEST_PLACE) --verbose -s | node $(TEST_DIR)/command-line --place-silent-verbose | $(BIN)/tap-spec
	@node $(CLI_PATH) $(TEST_PLACE) -v --silent | node $(TEST_DIR)/command-line --place-silent-verbose | $(BIN)/tap-spec
	@node $(CLI_PATH) $(TEST_PLACE) --verbose --silent | node $(TEST_DIR)/command-line --place-silent-verbose | $(BIN)/tap-spec

	@node $(CLI_PATH) -pd | node $(TEST_DIR)/command-line --print-dates | $(BIN)/tap-spec
	@node $(CLI_PATH) --print-dates | node $(TEST_DIR)/command-line --print-dates | $(BIN)/tap-spec

	@node $(CLI_PATH) -ps | node $(TEST_DIR)/command-line --print-sources | $(BIN)/tap-spec
	@node $(CLI_PATH) --print-sources | node $(TEST_DIR)/command-line --print-sources | $(BIN)/tap-spec

	@node $(CLI_PATH) -V | node $(TEST_DIR)/command-line --version | $(BIN)/tap-spec
	@node $(CLI_PATH) --version | node $(TEST_DIR)/command-line --version | $(BIN)/tap-spec

	@node $(CLI_PATH) -h | node $(TEST_DIR)/command-line --help | $(BIN)/tap-spec
	@node $(CLI_PATH) --help | node $(TEST_DIR)/command-line --help | $(BIN)/tap-spec
# Must have `sentry-cli` installed globally
# Following variables must be passed in

#SENTRY_AUTH_TOKEN=
#SENTRY_ORG=
#SENTRY_PROJECT=


setup_release: $(info ************ RELEASE VERSIOIN **********)


# # Must have `sentry-cli` installed globally
# # Following variables must be passed in

# SENTRY_AUTH_TOKEN=54cd158bc8da4486a6ffb5767934c2378c24e1746f86451883b8776c659912ce
# SENTRY_ORG=ey-demo
# SENTRY_PROJECT=frontend

# REACT_APP_RELEASE_VERSION=`sentry-cli releases propose-version`

# setup_release: create_release upload_sourcemaps associate_commits finalize_release


# create_release:
# 	sentry-cli releases -o $(SENTRY_ORG) new -p $(SENTRY_PROJECT) $(REACT_APP_RELEASE_VERSION)


# upload_sourcemaps:
# 	sentry-cli releases -o $(SENTRY_ORG) -p $(SENTRY_PROJECT) files $(REACT_APP_RELEASE_VERSION) \
# 		upload-sourcemaps --url-prefix "~/static/js" --validate build/static/js

# associate_commits:
# 	sentry-cli releases -o $(SENTRY_ORG) -p $(SENTRY_PROJECT) set-commits --auto $(REACT_APP_RELEASE_VERSION)

# finalize_release:
# 	sentry-cli releases -o $(SENTRY_ORG) -p $(SENTRY_PROJECT) finalize $(REACT_APP_RELEASE_VERSION)

from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, catalog, services, provision, usage, costs, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(catalog.router, prefix="/catalog", tags=["catalog"])
api_router.include_router(services.router, prefix="/services", tags=["services"])
api_router.include_router(provision.router, prefix="/provision", tags=["provision"])
api_router.include_router(usage.router, prefix="/usage", tags=["usage"])
api_router.include_router(costs.router, prefix="/costs", tags=["costs"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
